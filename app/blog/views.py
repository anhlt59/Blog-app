from django.shortcuts import render
from django.views import generic
from core.models import Post
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage


# Create your views here.


class PostList(generic.ListView):
    queryset = Post.objects.filter(status=1)#.order_by('-created_at')
    template_name = 'blog/index.html'
    paginate_by = 5



class PostDetail(generic.DetailView):
    model = Post
    template_name = 'blog/post_detail.html'
