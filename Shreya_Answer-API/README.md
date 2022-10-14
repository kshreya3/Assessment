# Forbes-Create-API

## Overview
* This application allows the user to create a FAST API in Python. It takes input through the API to add and delete a keyword from the dictionary. Additionally, we can post the story in the API and upon execution the application finds the words from the story that were not present in the dictionary and returns those words along with the words closest match from the dictionary. 

## Goal
* To create webserver, API and an application using Python that performs various functions with the dictionary.txt and story.txt file.

## Prerequisites
* To create a FAST API, web server and an application, below are the prerequistes - 
* Run the commands to install the api and server modules - pip install pyngrok nest_asyncio fastapi uvicorn loguru 

## Instructions (Setup)
* Execute the cells in the Ans_Python_FastAPI.ipynb file to create the Web Server, and FAST API. You will see the link to the web server after running Third Cell. - Eg) INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
* Click on this URL followed by /docs - Eg) http://127.0.0.1:8000/docs. You will see the below page 
<img width="914" alt="image" src="https://user-images.githubusercontent.com/91700976/195720752-88ca2611-423b-484a-bd2f-6da61e045bfa.png">

* Sucesss, you have your web server running and API ready to interact with your application. 

## Execution of the application
**The GET Method** is used to request the data from a server. In the GET Method, we have the dictionary.txt file returned as a JSON object. Follow the below steps to get the data. 
* Click on the drop down menu from GET/dictionary on the http://127.0.0.1:8000/docs. 
* Click on Try it out and click Execute.
* You will be returned with a URL, paste that URL on your browser to see the Dictionary.txt file is now converted to a JSON. Additionally, you can use this URL within your application to manipulate the data.
 
**The POST Method** is used to send changes from the client to the server like adding information on the server.
* We have two POST operations in this application. The first one is POST on the dictionary.txt file and the other one on story.txt file.

Part 1 - 
* Click on the drop down menu from POST/dictionary on the http://127.0.0.1:8000/docs. 
* Click on Try it out, you will see the a dialog box as shown in the screenshot below. 
* Enter the String you wish to add to your dictionary.txt file as shown below.
![image](https://user-images.githubusercontent.com/91700976/195723628-73138fd3-1573-4014-899c-5c3446f22641.png)

* Click on the Execute button. Go to your dictionary.txt file in your directory, you will see the keyword added at the end of the file. 

Part 2 - 
* Click on the drop down menu from POST/story on the http://127.0.0.1:8000/docs. 
* Click on Try it out, you will see the a dialog box as shown in the screenshot below. 
* Enter a string from the story.txt file as shown below.
![image](https://user-images.githubusercontent.com/91700976/195724003-29acf7f1-a60f-48e2-aacb-3aa0122b54c1.png)

* Click on the Execute button. You will see a response returned in the Responses section with the words from the string that were not a part of the dictionary.txt file and the closest match to the word. 
![image](https://user-images.githubusercontent.com/91700976/195724115-30a2844d-cf71-4578-8edb-d7af7840526a.png)

**The DELETE Method** deletes existing information. In the DELETE Method, we have the dictionary.txt. Follow the below steps to delete a word from this file.
* Click on the drop down menu from GET/dictionary on the http://127.0.0.1:8000/docs. 
* Click on Try it out, you will see the a dialog box as shown in the screenshot below. 
* Enter the String you wish to delete from your dictionary.txt file as shown below.
![image](https://user-images.githubusercontent.com/91700976/195724625-eb6ffeab-a4c1-4f98-997d-7982ca562dea.png)

* Click on the Execute button. Go to your dictionary.txt file in your directory, you will see the keyword deleted from the file. 

## Technical Specifications - 
Full Stack Python is used to develop this application. 
No Libraries have been used for Spell Check or Keyword Matching.

## Way to Deploy this API Application - 
* Initially, using the OpenAPI Specification will build a Docker image of the API Server.
* Run the docker image on your server environment(docker container) and export the endpoints to a URL. 
* Now, we write an application to make requests to the API endpoint on the URL.
* Now, we should be able to use GET, POST, and DELETE requests from the API. 
