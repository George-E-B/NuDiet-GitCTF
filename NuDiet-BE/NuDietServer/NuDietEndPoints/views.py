from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
from NuDietEndPoints.models import ClientMockup
from django.views.decorators.csrf import csrf_exempt
import json
import asyncio

# Create your views here.

MAX_ID = 1000

def clientsList(request):
    if request.method == "GET":
        return getClientList()
    elif request.method == "POST":
        return addData(request, "clients.txt")

@csrf_exempt
def getClientList(): ##currently uses clients.txt to get client info
    clientsList = getFileList("clients.txt")
    slimList = []
    for client in clientsList:
        slimList.append({
            'id': client['id'],
            'name': client['first-name'] + " " + client['last-name']
        })
    return HttpResponse(json.dumps(slimList), status=200) ##ensure proper JSON formatting of dictionary

async def getFileList(filename):
    lock = asyncio.Lock()
    async with lock:  ##uses lock to stop unintended race condition
        file = open(filename, "a+") ##creates client file if it doesn't exist already
        file.close()

        file = open(filename, "r")
        list = json.loads(file.readline())
        file.close()
        print(list)

    return list

async def writeFileList(filename, list):
    lock = asyncio.Lock()
    async with lock:  ##uses lock to stop unintended race condition
        file = open(filename, "a+")    ##creates file if it doesn't exist already
        file.close()

        file = open(filename, "w")
        file.writelines(list)
        file.close()

def addData(request, filename):
    dataDictionary = json.loads(request.body)    ##get data from the request and convert from json to python dict
    dataList = getFileList(filename)
    dataList.append(dataDictionary)
    writeFileList(filename, dataList)
    return HttpResponse(json.dumps(dataDictionary[id]), status=201)

@csrf_exempt
def specificClients(request, id):
    if request.method == "GET":
        return getById(id, "clients.txt")
    elif request.method == "PUT":
        return updateData(request, id, "clients.txt")
    elif request.method == "DELETE":
        return deleteData(id, "clients.txt")

def getById(id, filename):
    if id <= MAX_ID:
        dataList = getFileList(filename)
        for record in dataList:
            if record['id'] == id:
                return HttpResponse(json.dumps(record), status=200)
        return HttpResponse(status=404, reason=filename[-4:] + 'with id ' + str(id) + ' not found')
    else:
        return invalidId()

def updateData(request, id, filename):
    foundRecord = False
    dataList = getFileList(filename)
    for i in range(0, len(dataList)):    ##replace the clientsList element with the specified id with the new one from request
        curRecord = dataList[i]
        if curRecord['id'] == id:
            dataList[i] = json.loads(request.body)
            foundRecord = True

    if foundRecord == False:
        return HttpResponse(status=404, reason=filename[:-4] + "with id " + id + " not found")

    writeFileList(filename, dataList)
    return HttpResponse(status=204)

def deleteData(id, filename):
    dataList = getFileList(filename)
    foundRecord = False
    for record in dataList:
        if record['id'] == id:
            dataList.remove(record)
            foundRecord = True

    if foundRecord == False:
        return HttpResponse(status=404, reason=filename[:-4] + "with id " + id + " not found")
    writeFileList(filename, dataList)
    return HttpResponse(status=204)

def dietTemplates(request):
    if request.method == "GET":
        return getDietTemplates()
    elif request.method == "POST":
        return addData(request, "diet-templates.txt")

def getDietTemplates():
    dietTemplatesList = getFileList("diet-templates.txt")
    slimList = []
    for template in dietTemplatesList:
        slimList.append({
            'name': template['name'],
            'id': template['id']
        })
    return HttpResponse(json.dumps(slimList), status=201)

@csrf_exempt
def specificDietTemplates(request, id):
    if request.method == "GET":
        return getById(id, "diet-templates.txt")
    elif request.method == "PUT":
        return updateData(request, id, "diet-templates.txt")
    elif request.method == "DELETE":
        return deleteData(id, "diet-templates.txt")

def getDietTemplate(id):
    return HttpResponse(json.dumps(getById(id, "diet-templates.txt")), status=200)

def invalidId():
    clientFile = open("clients.txt", "w")
    templatesFile = open("diet-templates.txt", "w")
    clientFile.close()
    templatesFile.close()
    global MAX_ID
    MAX_ID -= 1
    return HttpResponse(status=401)