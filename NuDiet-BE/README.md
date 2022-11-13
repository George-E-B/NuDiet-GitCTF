# NuDiet-BE
## Dependencies:
- django-cors-headers==3.13.0
- Django [required: >=3.2, installed: 4.1.3]
  - asgiref [required: >=3.5.2,<4, installed: 3.5.2]
  - sqlparse [required: >=0.2.2, installed: 0.4.3]
  - tzdata [required: Any, installed: 2022.6]
- djangorestframework==3.14.0
- django [required: >=3.0, installed: 4.1.3]
  - asgiref [required: >=3.5.2,<4, installed: 3.5.2]
  - sqlparse [required: >=0.2.2, installed: 0.4.3]
  - tzdata [required: Any, installed: 2022.6]
- pytz [required: Any, installed: 2022.6]
- mysqlclient==2.1.1

## Install commands:
- django-cors-headers
  - `pip install django-cors-headers`
- Django
  - `pip install Django`
- djangorestframework
  - `pip install djangorestframework`
- pytz
  - `pip install pytz`
- mysqlclient
  - `pip install mysqlclient`
  
(Note: Please reference the dependencies section above for guidance on versioning - you may need to modify the above commands to ensure valid versions of these dependencies are being installed in your environment)
  
 ## Running the Project:
The backend needs to start running before the frontend in order for the overall system to function as intended. Please run the backend with the following command before running the frontend:

`python manage.py runserver`