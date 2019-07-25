
// Get Request 

function performGetRequest1(){
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML ='';
    axios.get('https://jsonplaceholder.typicode.com/todos')
         .then(function(response){
             resultElement.innerHTML = generateSuccessHTMLOutput(response);
         })
         .catch(function(error){
             resultElement.innerHTML = generateErrorHTMLOutput(error);
         })
}

function generateSuccessHTMLOutput(response){
             
    return `
            <h4 class="text-info">Results:</h4> 
            <br>
            <h5>Status:</h5> 
            <pre style="background-color:#f8f9fa; padding: 1rem">${response.status}  ${response.statusText} </pre>
            <br>
            <h5>Headers:</h5> 
            <pre style="background-color:#f8f9fa; padding: 1rem">${JSON.stringify(response.headers, null, '\t')} </pre>
            <br>
            <h5>Data:</h5> 
            <pre class="overflow-auto" style="background-color:#f8f9fa; padding: 1rem; height:300px;">${JSON.stringify(response.data, null, '\t')} </pre>
                 
           ` 
 }

 
 function generateErrorHTMLOutput(error){
     
    return `
            <h4 class="text-info">Results:</h4> 
            <br>
            <h5>Message:</h5> 
            <pre style="background-color:#f8f9fa; padding: 1rem">${error.message}</pre>
            <br>
            <h5>Status:</h5> 
            <pre style="background-color:#f8f9fa; padding: 1rem">${error.response.status}  ${error.response.statusText} </pre>
            <br>
            <h5>Headers:</h5> 
            <pre style="background-color:#f8f9fa; padding: 1rem">${JSON.stringify(error.response.headers, null, '\t')} </pre>
            <br>
            <h5>Data:</h5> 
            <pre class="overflow-auto" style="background-color:#f8f9fa; padding: 1rem; height:300px;">${JSON.stringify(error.response.data, null, '\t')} </pre>
                 
           ` 
 }



// Get Request with searching id

 function performGetRequest2(){
    var resultElement = document.getElementById('getResult2');
    var todoId = document.getElementById('toDoId').value;
    resultElement.innerHTML ='';
    axios.get('http://jsonplaceholder.typicode.com/todos', {
        params:{
            id: todoId
        }
    })
         .then(function(response){
             resultElement.innerHTML = generateSuccessHTMLOutput(response);
         })
         .catch(function(error){
             resultElement.innerHTML = generateErrorHTMLOutput(error);
         })
}

//  Post Request
document.getElementById('todoInputForm').addEventListener('submit', function (e){
    e.preventDefault();
    var todoTitle = document.getElementById('todoTitle').value;

    if(todoTitle === ''){

        showAlert('Please fill up the form', 'alert-danger' );
    }
    else{
        performPostRequest(e);

    }

});

// Post Request Function

function performPostRequest(e){
    var resultElement = document.getElementById('getResult2');
    var todoTitle = document.getElementById('todoTitle').value;
    resultElement.innerHTML ='';

    axios.post('http://jsonplaceholder.typicode.com/todos',{
        userId: '1',
        title: todoTitle,
    })
    .then(function(response){
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function(error){
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    })

}

// Show alert function
function showAlert(message, className){
    let div = document.createElement('div');
    let toDoDiv = document.getElementById('create-todo');
    let todoInputForm = document.getElementById('todoInputForm');

    
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    toDoDiv.insertBefore(div, todoInputForm);
}

// Clear all element

function clearOutput(){
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = '';
}
