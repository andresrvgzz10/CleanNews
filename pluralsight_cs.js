chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "courseCounts") {
        
        $('#Author').text('Hellow');
    }

    if (request.action == "makeSortable") {
    }
});

chrome.runtime.sendMessage({ action: "show" });