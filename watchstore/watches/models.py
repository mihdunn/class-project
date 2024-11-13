from unicodedata import category
from django.db import models
class Watch(models.Model):
    CATEGORY_CHOICES = [
        ('smart', 'Smart'),
        ('elegant', 'Elegant'),
        ('classic', 'Classic'),
        ('sport', 'Sport'),
    ]
    title=models.CharField(max_length=100)
    price=models.DecimalField(max_digits=10,decimal_places=2)
    image=models.URLField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='smart', null=True)

    def __dtr__(self):
        return self.title
    

class Login(models.Model):
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username


class ContactUs(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.email}"

