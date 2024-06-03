const Table = ({ data }) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th style={{width:'10%'}}>Position</th>
            <th style={{width:'70%'}}>School name</th>
            <th style={{width:'20%'}}>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              <td>{row.column3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

const data = [
    { column1: '1', column2: 'School1 Name', column3: 'Points' },
    { column1: '2', column2: 'School2 Name', column3: 'Points' },
    { column1: '3', column2: 'School3 Name', column3: 'Points' },
    { column1: '4', column2: 'School4 Name', column3: 'Points' },
    { column1: '5', column2: 'School5 Name', column3: 'Points' },
    { column1: '6', column2: 'School6 Name', column3: 'Points' },
    { column1: '7', column2: 'School7 Name', column3: 'Points' },
    { column1: '8', column2: 'School8 Name', column3: 'Points' },
    { column1: '9', column2: 'School9 Name', column3: 'Points' },
    { column1: '10', column2: 'School10 Name', column3: 'Points' },
    { column1: '11', column2: 'School11 Name', column3: 'Points' },
    { column1: '12', column2: 'School12 Name', column3: 'Points' },
  ];
  
  function Leaderboard() {
    return (
      <div className="tabledata">
        <h1 className="Leaderboard">Leaderboard</h1>
        <Table data={data} />
      </div>
    );
  }

  export default Leaderboard;