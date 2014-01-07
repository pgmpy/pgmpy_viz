pgmpy_viz
=========

pgmpy_viz is an application that comes battries included with the pgmpy library.
It is a package that allows user to visually model graphs via their browser.
These graphs will be mapped to pgmpy models internally.


Installation
------------

Change directory into the application

        $ cd pgmpy_viz

Initialize submodule(s)

        $ ./update


#### (Optional) Virtualenv Setup

It is optional but suggested to start and activate a virtualenv before the steps ahead.
**pgmpy** uses Python 3.x. So if you have multiple python installations it is suggested
that you run a python 3 virtualenv before.

You may use the following steps (Linux example):

        $ virtualenv -p /usr/bin/python3.2 venv

        $ source venv/bin/activate

Now you can continue with installing the dependencies described ahead.
        ...

#### Install dependencies

        $ pip install -r requirements.txt


Usage
-----

#### Starting the development server

Run a local development server using the following command.
The server runs on port 8000 by default.

        $ python manage.py runserver

Now visit the following url in your browser:

        http://localhost:8000/

You will see a blank canvas with two buttons:

1.  "Draw Mode"
2.  "Analysis Mode"

#### Interacting with pgmpy
Refer [wiki page](https://github.com/pgmpy/pgmpy_viz/wiki/Detailed-Description) for details 

Use "Draw Mode" (1) to draw the model.
This mode has the is used to add the model and post it as JSON object.

Use "Analysis Mode" (2) to analyse the graph.
This mode has the functionality of observing some nodes or specific states of nodes.
It also shows the CPD after observing certain nodes.


Note
----
The package is currently incomplete and unstable. Kindly use with caution.
