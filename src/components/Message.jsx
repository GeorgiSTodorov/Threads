import React from 'react';

const MONTHS = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

const getDaySuffix = (day) => {
    // For 1, we want to say 1st, for 2, 2nd, etc.
    switch (day) {
        case 1:
        case 21:
        case 31:
            return day + "st";
        case 2:
        case 22:
            return day + "nd";
        case 3:
        case 23:
            return day + "rd";
        default:
            return day + "th";
    }
}

const getMonthAndDate = (date) => {
    // The date has the format 2019-04-24 07:36:39.
    // The first split takes only the first part, for example 2019-04-24.
    // The second split takes the year, month and date, for example ["2019", "04", "24"]
    const split = date.split(" ")[0].split("-");
    const month = split[1];
    const day = split[2];
    return MONTHS[Number(month)] + " " + getDaySuffix(Number(day));
}

const Message = ({ message, messagesLength }) => {
    return (
        <div className={
            messagesLength !== 0 ?
                messagesLength > 2 ?
                "message threeMessages"
                :"message twoMessages"
            :"message"}>
            {messagesLength !== 0 && <div className="messageCount"><span>{messagesLength} messages</span></div>}
            <div className="messageRow"><span className={message.score && message.score > 5 ? "highRating" : "lowRating"}>{message.subject}</span>
                <span>{message.team}</span></div>
            <div className="messageRow questionAndDate"><span>{message.question}</span>
                <span>{getMonthAndDate(message.created_at)}</span></div>
            <div className="messageRow messageText">{message.text}</div>
        </div>
    );
}

export default Message;