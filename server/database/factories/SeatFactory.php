<?php

namespace Database\Factories;

use App\Models\Screenings;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class SeatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        $cols = range(1, 10);

        static $row = 'A'; // Khởi tạo giá trị ban đầu của hàng
        static $col = 1;   // Khởi tạo giá trị ban đầu của cột

        // Tạo tên ghế bằng cách kết hợp hàng và cột
        $seatName = $row . $col;

        // Tăng giá trị cột lên 1
        $col++;

        // Nếu đã tạo đủ 10 cột cho hàng hiện tại, chuyển sang hàng tiếp theo và đặt lại giá trị cột bằng 1
        if ($col > 10) {
            $row++;
            $col = 1;
        }

        // Nếu đã tạo đủ 8 hàng và 10 cột, thoát khỏi vòng lặp và trả về dữ liệu của ghế cuối cùng
        if ($row > 'H' && $col > 10) {
            return [
                'name' => $seatName,
                'status' => 'available',
                'screening_id' => 1, // Thay đổi giá trị này nếu bạn muốn ghế này thuộc về suất chiếu nào đó
            ];
        }

        // Trả về dữ liệu của ghế hiện tại
        $arrScreeningId = Screenings::all()->pluck('id');
        $screeningId = fake()->randomElement($arrScreeningId);
        return [
            'name' => $seatName,
            'status' => 'available',
            'screening_id' => $screeningId, // Thay đổi giá trị này nếu bạn muốn ghế này thuộc về suất chiếu nào đó
        ];
    }
}
