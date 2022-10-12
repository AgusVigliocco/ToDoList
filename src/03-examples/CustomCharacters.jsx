
import { useFetchCharacter } from '../hooks/useFetchCharacters';
import { useCounter } from '../hooks';
import '../index.css'




export const CustomCharacters = () => {

    const { counter, incremento, decremento } = useCounter(1)

    const { data, isLoading } = useFetchCharacter(`https://www.breakingbadapi.com/api/characters/${counter}`)

    const { img, name, nickname, portrayed } = !!data && data[0]

    return (
        <div className='img-thumbnail text-center'>
            <div className="card align-items-center">
                <img className='img-fluid rounded' src={img} alt={name} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text"><strong>Apodo: </strong>{nickname}</p>
                    <p className="card-text"><strong>Actor/Actriz: </strong>{portrayed}</p>
                    <button
                        onClick={() => decremento()}
                        className="btn btn-warning"
                        disabled={counter < 2}
                    >
                        Back Character
                    </button>
                    <button
                        onClick={() => incremento()}
                        className="btn btn-primary">
                        Next Character
                    </button>
                </div>
            </div>
        </div>

    )
}
