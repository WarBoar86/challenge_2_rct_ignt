import { Button } from "./Button"

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarParams {
  genres:GenreResponseProps[],
  selectedGenreId: number,
  handleClickButton: (id:number) => void
}

export function SideBar({genres, selectedGenreId, handleClickButton} : SideBarParams) {
  // Complete aqui

  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav> 
    );
}