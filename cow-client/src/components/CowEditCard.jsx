function CowEditCard({ closeEditCard }) {
  return (
    <div className="cow-edit-card">
      <div className="cow-edit-contents">
        <span onClick={closeEditCard}>X</span>
      </div>
    </div>
  )
}

export default CowEditCard
