from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=40)
    description = models.CharField(max_length = 200)
    image = models.ImageField(upload_to = 'projects/images')
    siteUrl = models.URLField(blank = True)
