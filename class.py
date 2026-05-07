class CustomLoginView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')

        # Check is_active before even attempting login
        try:
            user=User.objects.get(email=email)
            if not user.is_active:
                raise AuthenticationFailed('Account is not active. Verify your email or request reactivation at /api/auth/reactivate/.')
        except User.DoesNotExist:
            pass  # let the normal flow return invalid credentials

        return super().post(request, *args, **kwargs)


@api_view(['POST'])
def request_reactivation(request):
    email = request.data.get('email')

    try:
        user = User.objects.get(email=email)

        if user.is_active:
            return Response({'message': 'Your account is already active. Please login.'})

        # Avoid duplicate requests
        if ReactivationRequest.objects.filter(user=user, is_handeled =False).exists():
            return Response({'message': 'Reactivation request already submitted. Please wait for admin response.'})
   
        ReactivationRequest.objects.create(user=user)

        # Notify admin
        send_mail(
            subject=f'Reactivation Request — {user.email}',
            message=f'User {user.first_name} {user.last_name} ( {user.email}) has requested account reactivation.\n\nPlease review and reactivate their account in the Django Admin panel.\n\nRequested at: {user.last_login}',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.SUPERADMIN_EMAIL],
        )

        return Response({'message': 'Reactivation request sent. Admin will review and contact you.'})

    except User.DoesNotExist:
        return Response(
            {'error': 'No account found with that username.'},
            status=status.HTTP_404_NOT_FOUND
        )
#deleted the entire custom login function 