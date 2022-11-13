from django.db import models
from django.db import connections

# Create your models here.
""" class Client(models.Model): #models the client table in the db
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    DOB = models.DateField()
    current_physinf_id = models.ForeignKey()
    goal_physinf_id = models.ForeignKey()
    diet_id = models.ForeignKey()
    class Meta:
        db_table = "students" """

class ClientMockup():
    id = 0
    first_name = ""
    last_name = ""
    sex = ""
    height = 0
    email = ""
    DOB = ""
    current_physinf_id = 0
    goal_physinf_id = 0
    diet_id = 0
    def __init__(self, id, fname, lname, sex, height, email, dob):
        self.id = id
        self.first_name = fname
        self.last_name = lname
        self.sex = sex
        self.height = height
        self.email = email
        self.DOB = dob
        for c in fname:
            self.current_physinf_id = (self.current_physinf_id + ord(c)) % 100
            self.goal_physinf_id = (self.goal_physinf_id + 2*ord(c)) % 100
            self.diet_id = (self.diet_id + ord(c)**2) % 100