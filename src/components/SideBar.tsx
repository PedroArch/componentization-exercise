import { Button } from "./Button";

interface SideBarProps {
  genres: {
    id: number,
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
    title: string,
  }[],
  handleClickButton: (id: number) => void,
  selectedGenreId: number,
}

export function SideBar(props: SideBarProps) {

  const genres = props.genres
  const handleClickButton  = props.handleClickButton
  const selectedGenreId = props.selectedGenreId

   return (
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
   )
}