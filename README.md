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

* 1. "Start Adding Nodes"
* 2. "Start Adding Edges"

#### Interacting with pgmpy
Refer [wiki page](https://github.com/pgmpy/pgmpy_viz/wiki/Detailed-Description) for details 

Use "Start Adding Nodes" (1) to toggle into the "Adding Nodes" Mode. 
When you click on the "Start Adding Nodes" button and switch into this state, 
you will be able to add as many nodes as you like. Click on this button again to
 stop adding nodes.

Use "Start Adding Edges" (2) to toggle into the "Adding Edges" Mode. 
You select any available node on the screen by clicking on it. 
The node that is selected first gets marked as the Source Node. Next, with the 
source node selected you click on another node which you would like to be your 
target node. As soon as you click the target node, an edge will be created
from the source to the target node and will be visible on the canvas.


Note
----
The package is currently incomplete and unstable. Kindly use with caution.
