var startQuestionAnswered = false;
var questionCount = 0; // Đếm số câu hỏi đã được trả lời

function startQuiz() {
    var startQuestionElement = document.getElementById('question');
    var yesButton = document.getElementById('yesBtn');
    var noButton = document.getElementById('noBtn');

    // Hiển thị câu hỏi đầu tiên và nút trả lời
    startQuestionElement.innerHTML = "Cậu có phải bạn Thùy Linh à?";
    yesButton.innerHTML = "Đúng";
    noButton.innerHTML = "Sai";

    // Đặt hàm xử lý cho nút "Đúng" và "Sai"
    yesButton.onclick = function () {
        alert("Ồ thì ra là cậu!");
        startQuestionAnswered = true;
        questionCount++;
        // Hiển thị câu hỏi thứ hai sau khi trả lời câu hỏi đầu
        changeQuestionTwo();
    };

    noButton.onclick = function () {
        alert("Cậu không phải sao\nThui cậu đừng điu 😠");
        startQuestionAnswered = true;
        questionCount++;
        // Hiển thị câu hỏi thứ hai sau khi trả lời câu hỏi đầu
        changeQuestionTwo();
    };
}

function showMessage(message) {
    if (message === 'OK' && startQuestionAnswered) {
        alert("Cảm ơn cậu rất nhiều 🤗!"); // Thông báo thay đổi tùy thuộc vào câu trả lời của bạn
        questionCount++;
        // Hiển thị câu hỏi tiếp theo sau khi trả lời câu hỏi thứ hai
        changeNextQuestion();
    } else if (message === 'NO' && startQuestionAnswered) {
        alert("Đi mà cậu <icon năn nỉ>"); // Thông báo thay đổi tùy thuộc vào câu trả lời của bạn
        questionCount++;
        // Hiển thị câu hỏi tiếp theo sau khi trả lời câu hỏi thứ hai
        changeNextQuestion();
    }

    // Bổ sung vào hàm để kiểm tra khi trả lời xong câu hỏi cuối cùng
    handleLastQuestion();
}

function handleLastQuestion() {
    // Kiểm tra xem đã trả lời hết 3 câu hỏi chưa
    if (questionCount === 3) {
        // Chuyển hướng đến đường dẫn https://www.youtube.com/watch?v=rYc1UbgbMIY
        window.location.href = "https://www.youtube.com/watch?v=rYc1UbgbMIY";
    }
}

function changeQuestionTwo() {
    var questionElement = document.getElementById('question');
    var yesButton = document.getElementById('yesBtn');
    var noButton = document.getElementById('noBtn');

    // Thay đổi câu hỏi và biểu cảm tương ứng
    questionElement.innerHTML = "Bạn Thùy Linh ơi, tớ hỏi cậu một câu được không 😊?";
    yesButton.innerHTML = "OK";
    noButton.innerHTML = "NO";

    // Đặt hàm xử lý cho nút "OK" và "NO"
    yesButton.onclick = function () {
        showMessage('OK');
    };

    noButton.onclick = function () {
        alert("Đi mà cậu <icon năn nỉ>");
    };
}

function changeNextQuestion() {
    var questionElement = document.getElementById('question');
    var yesButton = document.getElementById('yesBtn');
    var noButton = document.getElementById('noBtn');

    // Thay đổi câu hỏi và biểu cảm tương ứng cho câu hỏi tiếp theo
    questionElement.innerHTML = "Không biết chủ nhận cậu rành chút thời gian đi ăn bánh uống nước được không 🥳?";
    yesButton.innerHTML = "OKI";
    noButton.innerHTML = "NOPE";

    // Đặt hàm xử lý cho nút "OKI" và "NOPE"
    yesButton.onclick = function () {
        alert("Thống nhất thế nhá bạn tui 🤗!!!!!\nIB lại mình để mình sắp xếp");

    };

    noButton.onclick = function () {
        alert("Năn nỉ lun đóa <icon buồn>");
    };
}

// Bắt đầu câu hỏi đầu tiên khi trang web được tải
startQuiz();
