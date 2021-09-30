from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///Info.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Info(db.Model):
    Email = db.Column(db.String(40), nullable=False ,primary_key=True)
    Password = db.Column(db.String(30), nullable=False)
    Address = db.Column(db.String(120), nullable=False)
    City = db.Column(db.String(30), nullable=False)
    State = db.Column(db.String(30), nullable=False)
    Zip = db.Column(db.String(6), nullable=False)
   

    def __repr__(self) -> str:
        return f"{self.Email}"


@app.route('/', methods=["GET", "POST"])
def home():
    if request.method == "POST":
        print("POST")
        Email = request.form["email"]
        Password = request.form["password"]
        Address = request.form["address"] 
        City = request.form["city"]
        State = request.form["state"]
        Zip = request.form["zip"]
        do=Info(Email=Email,
                Password=Password,
                Address=Address,
                City=City,
                State=State,
                Zip=Zip)
        db.session.add(do)
        db.session.commit()
    return render_template("Form.html")


if __name__ == "__main__":
    app.run(debug=True)