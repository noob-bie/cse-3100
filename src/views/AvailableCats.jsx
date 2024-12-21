import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', breed: 'Sphynx', age: '2' },
  { name: 'Mittens', breed: 'Peterbald', age: '2' },
  { name: 'Shadow', breed: 'Birman', age: '1' },
  { name: 'Pumpkin', breed: 'Abyssinian', age: '3' },
  { name: 'Luna', breed: 'Persian', age: '4' },
  { name: 'Simba', breed: 'Bengal', age: '2' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    let filtered = cats;

    if (breedFilter) {
      filtered = filtered.filter(
        (cat) => cat.breed.toLowerCase() === breedFilter.toLowerCase()
      );
    }

    if (nameFilter) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    setFilteredCats(filtered);
  }, [breedFilter, nameFilter, cats]);

  return (
    <section className="text-center mt-4">
      <h2 className="text-primary fw-bold mb-4">Available Cats</h2>
      <p className="text-muted fs-5 mb-4">
        Meet our adorable cats looking for their forever home!
      </p>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <select
          onChange={(e) => setBreedFilter(e.target.value)}
          className="form-select w-auto"
          style={{
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            minWidth: '200px',
          }}
        >
          <option value="" className="bg-gray">
            Select Breed
          </option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Siamese">Siamese</option>
        </select>
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setNameFilter(e.target.value)}
          className="form-control"
          style={{
            width: '150px',
            alignSelf: 'flex-end',
            marginLeft: 'auto',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          }}
        />
      </div>

      <div className="row g-4 cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="card shadow-lg border-0"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="card-img-top"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderBottom: '3px solid #007bff',
                }}
              />
              <div className="card-body">
                <h3 className="card-title text-primary">{cat.name}</h3>
                <p className="card-text mb-1 text-muted">Age: {cat.age}</p>
                <p className="card-text text-muted">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}
