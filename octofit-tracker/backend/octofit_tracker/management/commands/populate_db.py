from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from django.conf import settings
from datetime import timedelta

class Command(BaseCommand):
    help = 'Populate the database with test data for users, teams, activity, leaderboard, and workouts'

    def handle(self, *args, **kwargs):
        # Do not clear data, just add new test data
        # (Assume database is clean or has been dropped)

        # Create users
        user_emails = []
        user_data = [
            ('thundergod@mhigh.edu', 'thundergod', 'thundergodpassword'),
            ('metalgeek@mhigh.edu', 'metalgeek', 'metalgeekpassword'),
            ('zerocool@mhigh.edu', 'zerocool', 'zerocoolpassword'),
            ('crashoverride@hmhigh.edu', 'crashoverride', 'crashoverridepassword'),
            ('sleeptoken@mhigh.edu', 'sleeptoken', 'sleeptokenpassword'),
        ]
        for email, name, password in user_data:
            user = User(email=email, name=name, password=password)
            user.save()
            user_emails.append(email)

        # Create teams
        blue_team = Team(name='Blue Team', member_emails=user_emails)
        gold_team = Team(name='Gold Team', member_emails=user_emails)
        blue_team.save()
        gold_team.save()

        # Create activities
        activities = [
            Activity(activity_id='act1', user_email=user_emails[0], type='Cycling', duration=60, date='2025-06-06T00:00:00Z'),
            Activity(activity_id='act2', user_email=user_emails[1], type='Crossfit', duration=120, date='2025-06-06T00:00:00Z'),
            Activity(activity_id='act3', user_email=user_emails[2], type='Running', duration=90, date='2025-06-06T00:00:00Z'),
            Activity(activity_id='act4', user_email=user_emails[3], type='Strength', duration=30, date='2025-06-06T00:00:00Z'),
            Activity(activity_id='act5', user_email=user_emails[4], type='Swimming', duration=75, date='2025-06-06T00:00:00Z'),
        ]
        for activity in activities:
            activity.save()

        # Create leaderboard entries
        leaderboard_entries = [
            Leaderboard(leaderboard_id='lb1', team_name='Blue Team', points=100),
            Leaderboard(leaderboard_id='lb2', team_name='Gold Team', points=90),
        ]
        for entry in leaderboard_entries:
            entry.save()

        # Create workouts
        workouts = [
            Workout(workout_id='w1', user_email=user_emails[0], description='Cycling Training', date='2025-06-06T00:00:00Z'),
            Workout(workout_id='w2', user_email=user_emails[1], description='Crossfit', date='2025-06-06T00:00:00Z'),
            Workout(workout_id='w3', user_email=user_emails[2], description='Running Training', date='2025-06-06T00:00:00Z'),
            Workout(workout_id='w4', user_email=user_emails[3], description='Strength Training', date='2025-06-06T00:00:00Z'),
            Workout(workout_id='w5', user_email=user_emails[4], description='Swimming Training', date='2025-06-06T00:00:00Z'),
        ]
        for workout in workouts:
            workout.save()

        self.stdout.write(self.style.SUCCESS('Successfully populated the database with test data.'))
