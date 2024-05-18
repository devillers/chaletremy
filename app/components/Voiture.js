import { comforta, lobster } from '../font';

export default function Voiture() {
  const data = [
    {
      column1: 'Depuis la France',
      column2: 'Paris',
      column3: '6h00',
    },
    {
      column1: 'Depuis la Suisse',
      column2: 'Genève',
      column3: '1h00',
    },
    {
      column1: '',
      column2: 'Lausanne',
      column3: '2h00',
    },
    {
      column1: 'Depuis l’Italie (Tunnel du Mont-Blanc)',
      column2: 'Courmayeur',
      column3: '0h45',
    },
    {
      column1: '',
      column2: 'Milan',
      column3: '3H30',
    },
    {
      column1: '',
      column2: 'Turin',
      column3: '2H30',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full bg-white  w-full">
        <h4 className="uppercase text-[20px] mt-5">en voiture </h4>
        <div className="p-2">
          {data.map((row, index) => (
            <div>
              <a className=" text-[10px] text-gray-500 uppercase">
                {row.column1}
              </a>
              <div
                key={index}
                className={`${comforta.className} p-2 flex justify-between`}
              >
                <a className=" text-[10px] font-light tracking-wide text-gray-900">
                  {row.column2}
                </a>
                <a className=" text-[10px] text-gray-500">{row.column3}</a>
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
