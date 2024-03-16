var keyword = "F8";
var content = `F8 123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, assumenda! Exercitationem totam in enim id, voluptatem itaque, distinctio perferendis quibusdam illum perspiciatis ipsa? Illum velit inventore alias deleniti consectetur aperiam? F8 123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, assumenda! Exercitationem totam in enim id, voluptatem itaque, distinctio perferendis quibusdam illum perspiciatis ipsa? Illum velit inventore alias deleniti consectetur aperiam? F8 123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, assumenda! Exercitationem totam in enim id, voluptatem itaque, distinctio perferendis quibusdam illum perspiciatis ipsa? Illum velit inventore alias deleniti consectetur aperiam? F8 123 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, assumenda! Exercitationem totam in enim id, voluptatem itaque, distinctio perferendis quibusdam illum perspiciatis ipsa? Illum velit inventore alias deleniti consectetur aperiam?`;

var position = content.toLowerCase().indexOf(keyword.toLowerCase());
var output = "";
var count = 0;
while (position !== -1) {
  output +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;
  content = content.slice(position + keyword.length); //Content còn lại sau khi đã cắt bỏ
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
  count++;
}
output += content;
// content =
//   content.slice(0, position) +
//   `<span>${content.slice(position, position + keyword.length)}</span>` +
//   content.slice(position + keyword.length);

document.write(`<p>Tìm kiếm với từ khóa <b>${keyword}</b></p>`);
document.write(output);
document.write(
  `<p>Đã tìm thấy <b>${count}</b> kết quả với từ khóa <b>lorem</b></p>`,
);
