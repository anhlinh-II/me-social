import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let stompClient: Stomp.Client | null = null;
let username: string = '';

// Function to connect to WebSocket
export function connectWebSocket(
    event: Event,
    onMessageReceived: (message: any) => void,
    onError: (error: string | Stomp.Frame) => void // Allow both string and Frame types
): void {
    event.preventDefault();
    username = (document.querySelector('#name') as HTMLInputElement).value.trim();

    if (username) {
        const socket = new SockJS('/ws');
        stompClient = Stomp.over(socket);

        // Specify headers if needed, or use an empty object if not required
        const headers = {
            
        };

        // Call connect with the correct parameters
        stompClient.connect(headers, onConnected.bind(null, onMessageReceived), handleError);
    }
}

// Function called when connected
function onConnected(onMessageReceived: (message: any) => void): void {
    stompClient?.subscribe('/topic/public', onMessageReceived);
    stompClient?.send(
        "/app/addUser",
        {},
        JSON.stringify({ sender: username, type: 'JOIN' })
    );
}

// Unified error handler
function handleError(error: string | Stomp.Frame): void {
    let errorMessage: string;
    if (typeof error === 'string') {
        errorMessage = error;
    } else {
        errorMessage = `Error: ${error.headers}`; // Adjust based on actual Frame properties
    }
    console.error(errorMessage);
    // Handle the error appropriately (e.g., display it to the user)
}

// Function to send messages
export function sendMessage(event: Event, messageInput: HTMLInputElement): void {
    event.preventDefault();
    const messageContent = messageInput.value.trim();
    if (messageContent && stompClient) {
        const chatMessage = {
            sender: username,
            content: messageInput.value,
            type: 'CHAT'
        };
        stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));
        messageInput.value = '';
    }
}
