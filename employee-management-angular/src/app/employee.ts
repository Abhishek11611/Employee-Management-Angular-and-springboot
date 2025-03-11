// export class Employee {

//     // empcode !: string;
//     empName !: string;
//     dept !: string;
//     dateOfJoin !: Date;
//     addr1 !:string;
//     addr2 !:string;
//     addr3 !:string;
//     city  !:string;
//     state  !:string;
//     pinCode !:string;
//     contactNo1 !:string;
//     contactNo2 !:string;
// }
export class Employee {
    id!: number; // Primary Key
    empCode!: string; // Unique Employee Code
    empName!: string;
    dept!: string;
    dateOfJoin!: Date;
    addr1!: string;
    addr2!: string;
    addr3!: string;
    city!: string;
    state!: string;
    pinCode!: string;
    contactNo1!: string;
    contactNo2!: string;
    createBy!: string;
    createTime!: Date;
    updateBy!: string;
    updateTime!: Date;
    activeStatus!: string; // 'A' for active, 'I' for inactive
}


