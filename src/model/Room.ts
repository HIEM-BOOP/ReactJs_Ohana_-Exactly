export type Room = {
    hinhAnhs: hinhAnh[],
    title:string
    loaiPhong : string,
    gioiTinh : string ,
    dienTich : number,
    diaChia : string ,
    gia : number  
}
type hinhAnh = {
    name: string;
    link: string;
    placeholder: string;
  };