drop database QuanLyHomstay;
create database QuanLyHomstay;
use  QuanLyHomstay;


create table City (
	idCity int primary key auto_increment,
    nameCity varchar(50)
);

create table Homestay (
	id int primary key auto_increment,
    name varchar(50),
    idCity int,
    num_bedroom int check (num_bedroom > 0),
    price float check (price > 0),
    num_badroom int check (num_badroom > 0),
    descript varchar(255),
    foreign key (idCity) references City(idCity)
);

insert into City (nameCity)
values	('Đà Nẵng'),
		('Đà Lạt'),
		('Hà Nội');

insert into Homestay (name, idCity, num_bedroom, price, num_badroom, descript)
values	('Royal', 1, 6, 205, 2, 'Homestay dạng phòng chủ tịch là một loại homestay đặc biệt, trong đó du khách sẽ được ở trong phòng được thiết kế và trang trí sang trọng, tạo cảm giác như đang lưu trú tại một khách sạn cao cấp hoặc khu nghỉ dưỡng'),
		('Vin', 1, 5, 123, 2, 'Homestay tại Đà Lạt mang đến không gian ấm cúng, gần gũi và trang trí đẹp mắt. Bạn có thể tận hưởng không gian yên tĩnh, nằm gần thiên nhiên và trải nghiệm sự thân thiện từ chủ nhà'),
		('King', 2, 2, 345, 1, 'omestay tại Hà nội cùng view Tô Lịch được đón ánh nắng ban mai tràn ngập căn phòng giúp một ngày dài thoải mái và năng động . Tuy nhiên đến giữa trưa và tối thì không nên mở cửa sổ vì sẽ có một vị thần mang trên người 1 mùi hương nước hoa sẽ làm bạn say mê và say sẩm');

ALTER TABLE homestay MODIFY COLUMN description text
    CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NUll;
