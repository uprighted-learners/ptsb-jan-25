function CowEditCard({ closeEditCard }) {
  // TODO: write better CSS for this
  // TODO: add actual contents
  return (
    <div className="cow-edit-card">
      <div className="cow-edit-contents">
        <span onClick={closeEditCard}>X</span>
      </div>
    </div>
  )
}

export default CowEditCard
