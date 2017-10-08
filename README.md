# django-react-demo

The following demo can be used as a boilerplate example on how to integrate ReactJS into a Django application. It uses Django REST framework to set up api view functions and serialization of data. 

--- 
## How to run application server

Clone this repo locally in the terminal by typing: 
```
git clone https://github.com/Jimmycheong/django-react-demo.git
```

Enter the directory, make a virtual environment and install the necessary dependancies:
```
cd django-react-demo/django_react
virtualenv env
source env/bin/activate
pip install -r requirements.txt
```

Next, use ```migrate``` to setup the database file. The ```repopulate``` management command populates the database with data.
```
python manage.py migrate
python manage.py repopulate
```

To run the server: 
```
python manage.py runserver
```

Go to ```localhost:8000``` on any browser and start exploring!

![screen shot 2017-10-08 at 19 30 07](https://user-images.githubusercontent.com/22529514/31319650-371a0de8-ac5f-11e7-85e0-457d33494b4f.jpg)
