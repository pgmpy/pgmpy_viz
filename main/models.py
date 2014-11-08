from django.db import models
# Create your models here.
from neo4django.db import models

class Node(models.NodeModel):
    name = models.StringProperty()

    Link = models.Relationship('self',rel_type='Link')//TODO: add link labels