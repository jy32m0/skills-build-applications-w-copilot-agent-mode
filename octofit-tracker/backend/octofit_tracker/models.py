from djongo import models


class User(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=128)


class Team(models.Model):
    name = models.CharField(max_length=100, unique=True)
    member_emails = models.JSONField(default=list, blank=True)  # Store user emails as a list


class Activity(models.Model):
    activity_id = models.CharField(max_length=100, unique=True)
    user_email = models.EmailField()  # Reference user by email
    type = models.CharField(max_length=50)
    duration = models.IntegerField()
    date = models.DateTimeField()


class Leaderboard(models.Model):
    leaderboard_id = models.CharField(max_length=100, unique=True)
    team_name = models.CharField(max_length=100)  # Reference team by name
    points = models.IntegerField()


class Workout(models.Model):
    workout_id = models.CharField(max_length=100, unique=True)
    user_email = models.EmailField()  # Reference user by email
    description = models.TextField()
    date = models.DateTimeField()
