export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "John Doe",
      title: "CEO of Acme Inc.",
      image:
        "https://preview.redd.it/cpslext1vx971.png?auto=webp&s=a67d767ddec283c3490613cdb0b40c180a33daf6",
    },
    {
      id: 2,
      name: "Jane Doe",
      title: "VP of Sales",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2wUhWS-WwLKFsiscoCIVnz_WXYvbi0S-xA&usqp=CAUg",
    },
    {
      id: 3,
      name: "John Smith",
      title: "VP of Engineering",
      image: "https://i.stack.imgur.com/5Kgaq.jpg?s=192&g=1",
    },
  ]);
}
