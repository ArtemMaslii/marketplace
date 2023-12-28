package com.artem.marketplace.model.info;

import lombok.Getter;

public enum Rate {
    AWFUL(1),
    BAD(2),
    NORMAL(3),
    GOOD(4),
    AMAZING(5);

    @Getter
    private final int value;

    Rate(int value) {
        this.value = value;
    }
}
