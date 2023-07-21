<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ListUser extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
      

        $roles = [
            0 => 'Khách hàng',
            1 => 'Nhân viên',
            2 => 'Admin',

        ];
        $roleText = isset($roles[$this->role]) ? $roles[$this->role] : 'N/A';

   
        
        $birthdayDate = Carbon::createFromFormat('Y-m-d', $this->birthday);

        return [
            'id'=>$this->id, 
            'name' => $this->name,
            'gender' => $this->gender,
            'birthday' => $birthdayDate->format('d/m/Y'), 
            'email' => $this->email,
            'password' => $this->password,
            'phone' => $this->phone,
            'role' =>  $roleText,
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y')
        ];
    }
}
