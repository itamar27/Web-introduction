from django.db import models

class Workout(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField()
    scale = models.IntegerField()

    ex_1_name = models.CharField(max_length=255)
    ex_1_reps = models.CharField(max_length=255)
    ex_1_sets = models.CharField(max_length=255)
    ex_1_desc = models.TextField()

    ex_2_name = models.CharField(max_length=255, null=True)
    ex_2_reps = models.CharField(max_length=255, null=True)
    ex_2_sets = models.CharField(max_length=255, null=True)
    ex_2_desc = models.TextField(null=True)

    ex_3_name = models.CharField(max_length=255, null=True)
    ex_3_reps = models.CharField(max_length=255, null=True)
    ex_3_sets = models.CharField(max_length=255, null=True)
    ex_3_desc = models.TextField(null=True)
