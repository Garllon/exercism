<?php

declare(strict_types=1);

class Lasagna
{
    public function expectedCookTime(): int {
        return 40;
    }

    public function remainingCookTime($time_in_oven): int {
        return $this->expectedCookTime() - $time_in_oven;
    }

    public function totalPreparationTime($layers): int {
        return $layers * 2;
    }

    public function totalElapsedTime($layers, $time_in_oven) {
        return $this->totalPreparationTime($layers) + $time_in_oven;
    }
    
    public function alarm(): string {
        return "Ding!";
    }
}
