# 20501A1201

The First Folder is that of the Number Microservices from the Front-End Web Application task #1 :
In this :
1. We import the necessary modules, including Flask for creating the web service and Requests for making HTTP requests to the provided URLs.
2. We define a route '/numbers' that listens to GET requests. It retrieves the 'url' query parameter, which can appear multiple times.
3. For each URL provided in the query parameters, we use the requests.get() method to make an HTTP GET request to that URL.
4. If the response status code is 200 (OK), we try to parse the JSON data from the response. If it contains a "numbers" field that is a list, we add it to the result dictionary.
5. If the response status code is not 200 or there is an error in the request, we include an appropriate message in the result dictionary.
6. Finally, we return the result dictionary as JSON in the response.

You can run this Flask application locally by saving it to a Python file (e.g., number_management_service.py) and running it using python number_management_service.py. Then, you can access the API at http://localhost:8008/numbers with the 'url' query parameters to retrieve data from the provided URLs. Make sure to replace the URLs with the actual endpoints you want to test.

Note that you need to have Flask and Requests installed in your Python environment. You can install them using pip:
pip install Flask requests
