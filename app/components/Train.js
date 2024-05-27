import { comforta, lobster } from '../font';

export default function Train() {
  const data = [
    {
      column1: 'Gare SNCF Saint-Gervais-Les-Bains',
      column2: 'Le Fayet - TGV depuis Paris',
      column3: '5h00',
    },
    {
      column1: 'LEMAN Express depuis Genève ',
      column2: '(MONT-BLANC EXPRESS – Vallée de Chamonix)',
      column3: '1h45',
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
                className={`${comforta.className} p-2 flex flex-col justify-between `}
              >
                <div className="flex flex-row justify-between">
                  <p className="  font-light tracking-wide text-gray-900">
                    {row.column1}
                  </p>
                  <p className="  text-gray-500">{row.column3}</p>
                </div>

                <p className="  text-gray-500">{row.column2}</p>
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
