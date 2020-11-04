export type Room = {
    hinhAnh: hinhAnh[],
    tieuDeDangBai:string,
    loaiPhong : string,
    gioiTinh : string ,
    dienTich : number,
    tenPhuong : string ,
    giaChoThue : number  
}
type hinhAnh = {
    name: string,
    link: string,
    placeholder: string,
  }