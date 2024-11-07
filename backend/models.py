from app import db

class Internship(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable = False)
    company = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(10), nullable=False)
    img_url = db.Column(db.String(200), nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "company": self.company,
            "description": self.description,
            "status": self.status,
            "imgUrl": self.img_url,
        }
