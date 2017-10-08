# django-react-demo
Demo integrating React into Django

--- 
## Install Dependancies 

Clone this repo locally in the terminal by typing: 
```
git clone https://github.com/Jimmycheong/django-react-demo.git
```

Enter the directory and install the necessary dependancies:
```
cd django-react-demo/django_react
pip install -r requirements.txt
```

Next, use ```migrate``` to setup the database file. The ```repopulate``` management command populates the database with data.
```
python manage.py migrate
python manage.py repopulate
```
