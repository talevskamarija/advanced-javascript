function countToOne(number) {
    if(number > 1) {
        countToOne(number-1);
    }
}

countToOne(5);