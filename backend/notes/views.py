from rest_framework import viewsets
from .models import NoteInfo
from .serializers import NoteSerializer
from rest_framework.permissions import IsAuthenticated     # ⭐ Add this

# ViewSet automatically provides GET and POST (and more)

class NoteViewSet(viewsets.ModelViewSet):
#     queryset = NoteInfo.objects.all()   DELETE THIS LINE
    
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]   # ⭐ Add this

    def get_queryset(self):
        return NoteInfo.objects.filter(user=self.request.user)  # ⭐ Only their notes

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # ⭐ Automatically set user