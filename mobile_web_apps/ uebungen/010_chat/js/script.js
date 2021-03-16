// const params = new URLSearchParams(window.location.search);
// const id = params.get("messages_id");


function getMessage(event) {

    fetch("https://test.sunbeng.eu/api/messages")
        .then(function (response) {
            if (response.ok) {
                return response.json();
                console.log(response);
            } else {
                throw new Error("API error");
            }
        })
        .then(function (messages) {
            //const getMsg = document.querySelector("#get_message");
            console.log(messages);
            const ol = document.querySelector('#message-list');

            for (let message of messages) {


                const time = message.timestamp;
                const name = message.name;
                const text = message.text;

                const li = document.createElement('li');
                li.textContent = time + name + text;
                ol.appendChild(li);


                //getMsg.textContent = text;


            }
        })
}

document.querySelector('#btn_get_message').addEventListener('click', getMessage);





function postMessage() {

    fetch("https://test.sunbeng.eu/"), {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(),
    }
}

document.querySelector('#btn_post_message').addEventListener('click', postMessage);

// const postMsg = document.querySelector("#post_message");
// const userName = document.querySelector("#user_name");