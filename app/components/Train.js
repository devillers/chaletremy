import { comforta, lobster } from '../font';

export default function Train() {
  const data = [
    {
      column1:
        'Gare SNCF Saint-Gervais-Les-Bains – Le Fayet - TGV depuis Paris',
      column2: '5h00',
    },
    {
      column1:
        'LEMAN Express depuis Genève (MONT-BLANC EXPRESS – Vallée de Chamonix)',
      column2: '1h45',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full bg-white  w-full">
        <h4 className="uppercase text-[15px] md:text-[20px] mt-5">en train </h4>
        <div className="p-2 text-[10px] md:text-[12px]">
          {data.map((row, index) => (
            <div>
              <div
                key={index}
                className={`${comforta.className} p-2 flex justify-between`}
              >
                <a className="  font-light tracking-wide text-gray-900">
                  {row.column1}
                </a>
                <a className="  text-gray-500">{row.column2}</a>
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
