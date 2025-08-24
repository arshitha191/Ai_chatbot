from flask import Flask, render_template, request, jsonify
import webbrowser
import threading

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message", "").lower()

    if "hello" in user_message or "hi" in user_message:
        reply = "Hello! How can I assist you today?"
    elif "how are you" in user_message:
        reply = "I'm doing well, thank you for asking! How about you?"
    elif "your name" in user_message:
        reply = "I'm an AI bot. I don't have a name, but you can call me AI!"
    elif "what is your purpose" in user_message or "what do you do" in user_message:
        reply = "My purpose is to assist you with any questions you might have and help you with various tasks!"
    elif "help" in user_message:
        reply = "Sure! What do you need help with? Feel free to ask me anything."
    elif "who created you" in user_message:
        reply = "I was created by a team of developers to assist with conversations and provide information."
    elif "thanks" in user_message or "thank you" in user_message:
        reply = "You're welcome! Let me know if you need anything else."
    elif "favorite color" in user_message:
        reply = "I don't have a favorite color, but I think blue is quite calming!"
    elif "what time is it" in user_message:
        from datetime import datetime
        current_time = datetime.now().strftime("%I:%M %p")
        reply = f"The current time is {current_time}."
    elif "joke" in user_message:
        reply = "Why don't scientists trust atoms? Because they make up everything!"
    elif "what is 2 plus 2" in user_message:
        reply = "2 plus 2 is 4."
    elif "world series" in user_message:
        reply = "The most recent winner of the World Series was the Houston Astros in 2023."
    elif "weather" in user_message:
        reply = "I'm sorry, I cannot fetch live weather data at the moment."
    else:
        reply = "I'm not sure how to respond to that. Can you please ask something else?"

    return jsonify({"response": reply})

# Function to open the browser
def open_browser():
    webbrowser.get(using='chrome').open_new("http://localhost:5000")

if __name__ == "__main__":
    threading.Timer(1.0, open_browser).start()  # Delay so the server starts first
    app.run(debug=True)
