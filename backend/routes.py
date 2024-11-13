from app import app, db
from flask import request, jsonify
from models import Internship


# Get all internships
@app.route("/api/internships", methods=["GET"])
def get_internships():
    internships = Internship.query.all()
    result =  [internship.to_json() for internship in internships]
    return jsonify(result)

# Create an internship
@app.route("/api/internships", methods=["POST"])
def create_internship():
    try:
        data = request.json

        required_fields = {"name", "company", "description", "status"}
        for field in required_fields:
            if field not in data or not data.get(field):
                return jsonify({"error": f'Missing required field: {field}'}), 400

        name = data.get("name")
        company = data.get("company")
        description = data.get("description")
        status = data.get("status")

        if status == "Accepted":
            img_url = f"https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
        elif status == "Rejected":
            img_url = f"https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000"
        elif status == "Pending":
            img_url = f"https://img.icons8.com/?size=100&id=cjUb4tRvBCNt&format=png&color=000000"
        else:
            img_url = None

        new_internship = Internship(name=name, company=company, description=description, status=status, img_url=img_url)

        db.session.add(new_internship)

        db.session.commit()

        return jsonify(new_internship.to_json()),201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}), 500
    
# Delete an internship
@app.route("/api/internships/<int:id>", methods=["DELETE"])
def delete_internship(id):
    try:
        internship = Internship.query.get(id)
        if internship is None:
            return jsonify({"error":"Internship not found"}),404
        
        db.session.delete(internship)
        db.session.commit()
        return jsonify({"msg": "Internship deleted successfully"}),200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}),500

# Update an internship status
@app.route("/api/internships/<int:id>", methods=["PATCH"])
def update_internship(id):
    try:
        internship = Internship.query.get(id)
        if internship is None:
            return jsonify({"error":"Internship not found"}),404
        
        data = request.json

        internship.name = data.get("name", internship.name)
        internship.company = data.get("company", internship.company)
        internship.description = data.get("description", internship.description)
         # Update status and adjust img_url if status has changed
        new_status = data.get("status", internship.status)
        if new_status != internship.status:
            internship.status = new_status
            # Update img_url based on the new status
            if new_status == "Accepted":
                internship.img_url = "https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
            elif new_status == "Rejected":
                internship.img_url = "https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000"
            elif new_status == "Pending":
                internship.img_url = "https://img.icons8.com/?size=100&id=cjUb4tRvBCNt&format=png&color=000000"
            else:
                internship.img_url = None
        
        db.session.commit()
        return jsonify(internship.to_json()),200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}),500
        

        
    

