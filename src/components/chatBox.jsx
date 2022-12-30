
function ChatBox() {
    return ( <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div class="shrink-0">
      <img class="h-12 w-12" src="https://st3.depositphotos.com/5532432/17164/v/600/depositphotos_171641188-stock-illustration-chat-vector-icon.jpg" alt="ChitChat Logo"/>
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-slate-500">You have a new message!</p>
    </div>
  </div> 
  );
}

export default ChatBox;