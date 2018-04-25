<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<form id="form">
    <input type="text" name="name" value="Erik's bar">
    <input type="text" name="description" value="Melhor Wiski da região">
    <input type="file" name="photo" id="file">
</form>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">

    $('#file').on('change', function () {

        let formData = new FormData();
        formData.append('name', 'Erik\'s bar');
        formData.append('description', 'Melhor Wiski da região');
        formData.append('photo', $('#file')[0].files[0]);

        let headers = {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc0MTZkYzNhYWZmMTliMzk0NDI3OWZmOTYxODUzNzM4MWVhM2JhMmZkNmQyZmJmZDI1OGZiMzZjMTgzNzFmZDViZmFhNzhjNGU5MmRhNDRkIn0.eyJhdWQiOiIzIiwianRpIjoiNzQxNmRjM2FhZmYxOWIzOTQ0Mjc5ZmY5NjE4NTM3MzgxZWEzYmEyZmQ2ZDJmYmZkMjU4ZmIzNmMxODM3MWZkNWJmYWE3OGM0ZTkyZGE0NGQiLCJpYXQiOjE1MjI2MTg2ODgsIm5iZiI6MTUyMjYxODY4OCwiZXhwIjoxNTU0MTU0Njg4LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.Zq4neM7w5jC7kfMTPROzjs2niii8mmLx2rXtkdGR2f6tAxnKrSf8anB2gOymkteanKkdGVxh0gCUbvkR6vWbXADCznWmH0M3KHpjUquOZOuW8vYmFEsVk7h18F8FZKledW_uGnZge0GGRGV9AWX63C0YJY1N5SWauTvlAncIxqenZ2YZr-20AWr41bR1JARuWRZvpKKTri03Bxcx2-8cvitl7qIQpuYJoaim6s_E-jFJ6byi6-hL5DrxfDGgQZwwvFc5Zg3o39-A155wyRpvLI7lR098bq3Y8XZcXHXM7yrnE9Hf2j7t3MPu50aNCX-65z0B8D89h4EF1j0mNLZvqUFDDDzY0UaIZ64rGoltFCbGSzAOQhsq6QnDctlK3qtC4ccMw_i6tEZvOHtuIbP9l7rHVXKXJDcEUzsDhQYCEPIcDscNVhQ8hu0Bogb02rJ6JOfRuTek-Fd5z5TnFPb0hCsVY8lCxSICyN6opdXukFQ5ouwLwiccmwrU2dqyBUdp0L5ivKHFKcPxaNwgiW6ESgeYCfvPiwnG2CDyObRM-MHVQ7W8fp86FF97fSaUx7HNcF0bXNQj92_QOvAVNWiaWqvCboN2oy4x1npXi8e5yI2Djgii00KWDj84aM8-alwXW8TZt9nljLKKlZgeRNH641dBM6ox0-KEf5y3f4awApk',
            //'content-type': 'multipart/form-data'
            'content-type': 'application/x-www-form-urlencoded'
        };

        axios.post('http://localhost:8000/api/v1/restaurants/3', formData, {headers: headers})
    })
</script>
</body>
</html>