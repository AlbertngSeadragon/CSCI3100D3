Post /generate_certificate
Request:
{
    "participants": ["albert", "john"]
}

Response 200
{
    Generated
}


Get /uploadgdrive

Token Get Expire after one hour need to refresh the token and put int .env
https://developers.google.com/oauthplayground/?code=4/5AFDU9nKLUoasg7rEABITzR5IK-GqvjDsjUdB8WtP4juZwa5-q8yJ3x1ZOJGCSm8YLB5yX-NPsIusSILu3ar9bg&scope=https://www.googleapis.com/auth/drive%20https://www.googleapis.com/auth/drive.appdata%20https://www.googleapis.com/auth/drive.file%20https://www.googleapis.com/auth/drive.metadata%20https://www.googleapis.com/auth/drive.metadata.readonly%20https://www.googleapis.com/auth/drive.photos.readonly%20https://www.googleapis.com/auth/drive.readonly%20https://www.googleapis.com/auth/drive.scripts

Response
Example

Upload{
"kind": "drive#file",
"id": "1i03zl81yVRbKQE5bh53maQEjKNnlHS07",
"name": "certificate_Alex.pdf",
"mimeType": "application/pdf"
}
