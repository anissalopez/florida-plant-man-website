#!/usr/bin/env python3

# Standard library imports
import random
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Plant

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():

        sunlight = ["bright, indirect", "direct sunlight"]
        water = ["daily", "weekly"]
        name = ["Monstera", "Anthurium", "Syngonium"]
        images = ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcBAgj/xABFEAACAQMBBQUGAwMICgMAAAABAgMABBEFBhIhMUETIlFhcQcUMoGRoUKxwSNS0RUkM2Jyk+HwFhc0Q1OCwtLi8SVjov/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAAICAwACAgMBAAAAAAAAAAABAhESITEDURNBIjJhBP/aAAwDAQACEQMRAD8A3CuHlXa4eVAAfUBh6hnnUzUPjHrUM86AO4rya9V4kdI1LSMFVRkknGKAEaFbS3j2Og3txGcOseFPgTwzTdztTokEhjkvkJB/CCQPmKZ2gmt9W2W1FrGaOdOxJyhzxHECs5TVOmS3pmVWzZjaZ/EnJ60Pn37gliSEzwqdOBHAkcrbsa8WxzY+HpUOS4d+EUW7H4tgVwr2c6JOl7K6hqwDwhYoD/vZAQD6eNHP9WbNHx1UB8czBw/OhD7Ua4Y1jW9EYAxiNQD+Ve9JNzeNPqGq3U09raqW3XdiHc8hjP8AnhW0cfRaaNP0KCa00+C2u7mKaaFArSqwG8BwyQeXDnXNR2r0iwDA3InkBxuQ9459eX3rGJmMztKwC9o3wqOAHOpA3ljGRwHIVr8jSK+R0X269o26x9309Qo5GWXifkB+tS9F9oNjeTiHUYhZsx7sm/vRn16iqLabPXt5A19cPHY2K8WurjguP6o5sagTppa5S2W9uP8A7ZmWME+IQAnHqaWcxZS+zeVYMAQQQeIIpZrF7HaTVNPsFsrW8lSFCd0E7xA8ATxA8qIaVt1qdjN/PZPfICeKPgOPRv41p8iLzRq+aVRrS7t722iubeXeilUMpx0pVdlWi91w12lTGB9R+MetQ6m6l8Y9ahUAI8qr+1ul3+qQJHayosKgs6u+6GP/AKqwVRdvNfbffSbNsKF/nDrwPHjuj7ZrHzzjCFyJk0kUGeWMZULnHUGmLbUp7KRmtpHRWG66hsBhnrT0llcTW81xDA7W8GBI6jupngKi2Gn3Op3sdlZJvzSHABOBXmx2c6DttpdxdaxDC1oJJJFEgjlYgbuOZI6U+Nh9Vu9R375ra3tS43o7ZzwXjy4en1rStL02PT7G1gwjSwwiLtccSP4V77PvmvQh4Uum8Yeyu2eyui2lssbafBIEGWeZAzHzJqLHpWm3krWD20cVmVed44xuDAwOnmc/Ki20F4ltb9gDiSQZwPCq5qhdZGMbMMjc4HmPCrdLgSpFUurKKXUJksoSlrHIRGvEnnwq3afoNlolj/KmvBSVwUiYZwTyGOreXSg+nXsenXUcptxP2bbzKTjeP/vFM6rfX2uXyy3TFiWxFAgOEz4DmT96jRmmRNoNWutduhJOTHaqf2UA5Dz8z50zabO6rfoDZ2MjIeTHug/M1ftm9k0tgt1q0aNN8UcBOQn9rxPlyqzySLCmZHCIOpIAFWoXtlqN7Zka7DbQtys0HkZ0/jUS92O2jgXfOnM4H/CdXP0BrULzarQrUkTarbZHNUYufouahRbe7NSyBf5RK/1pLeRB9SuPrRhEeKKXs3tPfbN2D6de2dxvLKWRZIzlVIHD65PzpVqNvd291EJreSKaNuTo6kGu08P6GKL5SNRHnkh/pBkdSKfilWRQRWhYN1PmD51CxU7U+Y9ag0ALFZJqltPdbT3Foue3muigJ8zz9McflWt1TdYt4tK2tj1qY4thbySsfB1XH3yK5f8AX480iJqwBt5NbaXZW2zunndjjAluCB8THlk+PX6VL2D0Fbezt9amJ7aWULEmOAUnGfU1T5feNc1lT8U93OB82P6VsN1FBpukxRBlSODswA3DIDCs/Cs5OX0iI/k7J+KZDIrkyMqjpkjjVc1jbSytAVtCsjjk7fD9OZrPtY1htTlMlzcPI2eGBwHpXU5pcNHKi4bb29xDqsNwoJgni7MEdHGeHzBzXiaBbi43JZVhiCZaQ9PE+vQDxoLom0M9tCbXUQ93aHBjimPeQg8Cp548qJ3TJfnftnRiRns84YfLwrJyRHQRqMcQkkls4JFtQwRC3HjjmT4nicU7oO0NjoqyyyWElxfkkLJvDCp4DqPOves3UssMcEwCxQDCRRjdQeJ9fOgEVpPf3sdlZR780pwq5x5knyAGaV70T96Cmq7d63dZS2khsE6dmA74/tHP2Aqq3lzcXbFry7nuGPMyyE5+taJZ+zaEqG1HUZWbqkChR9SDRFfZ/s+o71tcv5tcuPyIrTGT6XTZjrKuMbxpo5Xka2C69nmgyoVgFzbN+8s5f7Nn7VQtptjb7RZR2Li9iYFh2S/tEA6so6eYpODQY0V5ZZEGEdlHgpxSqOZN3gfvmlSEfXV9ewJGc5Y9QooLBqojJ7rohPrUm5UCFl8ONV/VryLS4BLMN+eVhHBCObE/5z8q1cmahuS+hmwVfOfEV0NnkarULlQFGOHnUyG4dORpqQBnNVvb+1mu9mZ1gTfMbK7ADJ3QeOKMRXefiFPrIjdaJLOLQmrRm/s10jt9QbUnwYrfKqM/jP8AhTlpay32p6/JrVwZF04ns1ZiF45K/bpWg2trb2iOlrCkSuxdggxlvGs/27SKDULnsLl1e63GuIxjdAVcL/zc/rWEfH8cUiMaQJ2o2i/lf+YaVbRW2nq3ebdAaTw9B5UN0fQ7zUndNMgMrp8UznCJnz8fIZNTtn9GbVrlIUJiRjgsBnAHM/561d9eu7bZjZ6VLJRFkdlCvXePXzOMnNUo3tiStWzMoY2W5ljk4yxsRI4OQCDjgakmVg+8pwR1/hXbG0kZYLeL/aLhl4nxY4H05/WrZt/a2+m6FpthaoFZZcA9WwuCSeuSc1ONoSRXRqTPCiXidqhHBvxgdOPWmt2eznW+0echl5OpAZcjBBFTNO0w6lfx2MR3CRu7xHwgAk/kaFatHLomsT2qybzROEzjAcYB5fOpxaVg/YYh2712IbssdnNjq8eD9mA+1SV9od+P6XS4WHikhB/WqpNGl0pkhG7IMloh+lQkbDgSsypvDeKjJA64HjVKcgyZepvaNmFhHYGKcjgzvlQfpQiHa64ttPu3hXttVuJP6eQ91FxwwPrwoJq1t7tckafde+WxVSkgXic8wR0IoW8rA4dcHy4VWTKtkdoLl3Z5VZnY5LAZyfGlT/bMOUn2pUWFn0ZqOobqOkMRllJHdXiTTXYe5PDqF2kUk3Ebj8cA47q+fnXLq5Gl6vb4kbspEKsnPlxyPOmbjWoIbreuLUTW8pARnb+ibwPkauzQdvbizuh+ztxE/iKgqCDUi4mjm+CJI/ALTaDwpgdThTyPgimgK9UDJplIhZlXeZVJC+NYjrGoS3lzJJO5LO5Y56GtnR8DnWd7d7LyLPJqmnRM0TktNEvEoepHl+VR5LaImG/Z0EaK5lA+AJGD4E5Lf9NAdu7w6ptJDYI29DbnBx1bm35AVM9m+oJBo2pyOw/ZSCQ+m4P+01XNH3rzWJ7mT4ipY+pNF3FUQ3UUG9GiD7T6QpHxSPKfkMCnvaXcmXWbO2B7sagkeBY07oSg7W6co/BFL+X+NAdu7jtNqbgZ4I6KPkBS+gb0HNkZANo4s/jMq/Pdz+hqs7aS9rtbddczgfTAotpF0LXW4ZukdwGPoeB+xNV7aZz/AKRXUp5+8Mf/ANUPgr0NTIRlwSCpyG8KYeT3hTkAOo4/1h41adlora41+0huI1lSRmBRuR7rEZ+lBNrtPTStobq2h7sQxJHjwbjj86lrViS0Bt8o28pYGvfvLMuM/PxrzI29x5HqKa6nzoGKSHB7yuCRnujhXK9CQqMKSB5GlTGa5b6hNq9/JfTDdVu7Ep/Cvj86tcbaWlqIfdVumcd8zDun5VTdGGII8dAKsNu5UArzH2q0bNEaSWbRpUS9H/x8jYhuGHGLPJW8R4H60RypGQRigmpbV6DEz21/fJMT3XiVTLz6cAaF6ZtDY2FzHbR3q3GmzHEDvkPbn91geO74HpRdCsuFehXkYZQy8QeORypwDhV0M81zy8a61ec0UBQorE2+n6tdQsR27PDNH0LB+6w+RINDdChMEk56HdA+9WXSbf3k67p7tun3jIPhvDgfqKA3Im0y4MVwu44HPo3mD1rKNJGE0Etmn3tsIfBbeU/lVc23BG0+ojHOTI+YBoxstdxrtLE0h4yRvGuPE4OPtTXtCsj/AC0J1HCaNT6kcD+lN8DsQOJ8yBs43wDkVC1xzc3Ek7DDTHePqRx+9NzymOBcHihxS7UXNoD1ViDU2QiRYai1ndWl4v8Au2V/oeIoz7RYjLeWGqAns7yI8+g/D9iKqbMUVkP4Twq5yA6/7OkYHeudLkKsBz3QP+0j6U1yi0UiXgN4c68Z3hmnD3lz9ajglZCvQ1IHvBrtIUqBWahbXcNhprXVw2I41yccz5CqVr20+p6x+yika2tG49jGcFv7R6+nKjd1p2oa08dvCyRWcR5ufjbxx5V51P2eanaadHqGmyG7XiXjVMMAPAdafTWdlOgUKBkfI1KCjeRhy/I1wqsy7yArKODoRgg9ef5V6h7ySJ1C7wHpzoMi17DbTe43TaVqMx92kb+buxyI2P4SfA1piHpWcbCbNw6ktxd30W/bmMwqD1LcSfkMfWrHpl9Jod4+j6xPvQxgta3jngyfuv4MPvVrRrF6LG4wTQTXdpdN0NR767s//DhG8R60A1/bcuJI9JAReXvD/Ef7I6VSryaXUYd1jvMDksTxNNy9DbLRZbXaaNoLy7jW493niUY3OO8PnU+82m0W9hZLm2nmToCgBHoc8KoVtEsOQOnMnxrlxchQQhJb8qzIsl32o2tvdh7VZo4wcplgzKR1zU7UNqzrUEME0MJeNt4TK24y8OOVPQ+VU64kDud9snypoyJGOHLmadCxLFq0fZoj4ypHEedDdJmAuXhZt1JhwB5BhyrVNJ0izvdmtLi1K0jlcWse9vDvA7o6jjUK62F0XeaWM3EAUZ7smQMetLFh8bKDfRFCPTjVj9mWpLDqlxps5HZ3ceQp5Ernh9M/Si1rsra6lYQzyTTRmRSVAxyzw+350I1bZ+12avba/ttS/bxSK6wuuScHy6c6StbGotdGNqtAfR9RZY0Puk3eibnjjxX5UM/0a1e44wWE7Acju4z9as937Q7dnAfSu0jVsjffPHxGRRjRtvNH1B1hmkezmPJZx3WPk3L61dKTCtmaXNpd6fL2F9bSwygZ3WXp40q26eytbtlkmhSVt3AY4PClS+P+jwRjbLcqQ6NOnXeDEVY9D222g0qJYYtRS5iB/wBnvIgQfRhgj61Y0W0VGFyIQh4YkIA+9VXaWDS47pTpeDkd/cOV3vKpVrYpRx4yNtTqw1m+S8/k6Owm3cSGNs9qfHkKg2cEt5KrwoFdD+0ZiApXkePjTkMbKu9KQy5wISeGfP8AwopaoyoBIjoJE7pK44eI8qVtkBqw1e5stGt9J0wYVFPa3S4Jck/h8BjAzihl/DFNEY5HYMeJLk/nXhXFrGw47w5EUNub5i5yxNUh2BdWtH0+eIGRZElBZSpzy505ZXBXioLN0GM1y+iub9YpEjYwI5TtByBwDj1xiuCKWKMqseF8uvr40/opHq6lCDDPk+A5UKnuHZsHl0xUmXJHeqBIe9TSGLzptgXBVeZ7o8zXreOKsewuiNqutK8qn3S2IklboWz3V/X5VSGjYbOPsrK3jPNIlU/IUO2jmMemmGI/tbllgTHPLHBP0yaKg5HDl5UDuz73tPbwDilnGZmHgzcFz8s03woB7XbTvpEiaTpwCzCIFpD+BTwAHnw51VZe2nt2upnMrPkEsclj1rzthG8u2mo4ySrRqP7tcVLuwsUEFtCMuid7y8SazkZTewBKvd48zUcjxohLAzydlAjSSMcDcXJY+AFWPTfZ/qFyge+mjswRwjwWf59KEmwjsrtpruqWcIhtdQuY4xyVX4ClVv8A9W6Dlqjf3I/jXarFlYsVxul27nayeL8aE3swiGURd/8AeH6UektlWIs3Abm8VHrw/Wp2p2sWm7I3KTRo00igNwzmRiBw9P0qKISbtlKh33t5SfiDA5+Rq37RXC/6LbKygBWeyT6bi1WreBhY3LAcSQFHiQP40e9oEXuabP6cvBbez3cegVf0ppUgjwA3VzvQpk5JB/Oh8FpdalfQ2dnGZJ5jhR0HiT4Ada7O5KwIgJYkgADOeNaxsVs8NFse3uIx7/cd6Q4+BeiA+nE0RjYRVmTtdpa3EtjHKZYbeV1UkYyeTt9Rw8gKgLPLHvbpJUmiG3OiT6FrtxhW7C4dpYX6EE5PzBzQKG4kQcQDVOJY9czbo73E+VDZG3nJqXcP2pz8I8K8WenXV87i1jLiNS7t0VfE0LQ7GIVaSRURSzswCqOZJ5CtFXWV2S0qLTbO2SXUD37l3+BXI5YHE45dOVVvRZYtCYX8arJcY3Q0o/o85wR58Dxrl3qMdxI0jLlm4k5pX6E2E4tvtcil3pEtZVz3kMJGfmDw+9WXYjXLTUru7eeVI7+5l3uyP7oGAFJ51nTXEY5Rj616gZ3kWVEVCpzvDhj0oyYrLxqOjs+02p3zDJaVeyU9e4oyfpQPU27AvDHlmbjJJ4+QovpuuS3kRWZzLcgd4OOLjxXz8qG6oQrhiobeGQRxGKhytkvY3oWvroLyyfyfFcyycBI0u4yDwHA0Wf2lOD3dIXHndf8AhVSl94vJlgt4y8hOFjiTJP0p9tmteAy2mXJA/qg/rVK0UrRZh7ShjjpXHyuP/GuVVDourKcHTLv+4b+FKqtjtl9Vi14inkzoD9c1I2wJNpYx/haYkj0Xh+ZpUqGKP6MGadGskttGw7rTrkf84FP+0wltqI0PJLVMeWSc0qVN8IX6jPs2sbe+16e5uU32tIw0S/hDFiM48Rjh61qhpUqqPDWPCq+0hI22XkDxI+ZkUbwzu5PMedZOmm24mRe9hmwePlSpVnN7EybaabaG4lRoQwTG7vcedFbexhe4WDiqbjNhcDiBSpVn9AAteRPdi6oFIZR3fDj/ABNVsMfGlSq48Ak2yBhk8TU5O8Vz+6aVKmJj8TEOjLwYMCCOho/d4udMaSRV3ipbh4jHH70qVZPpI/7OpN3WbiPcU5i+IjiOPStJIwAfGuUq38fDRHDSpUq0A//Z', 'data:image/jpeg;base64,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', 'data:image/jpeg;base64,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']
        

        def create_plant_data():
            print("Deleting existing data...")
            Plant.query.delete()
            plants = []
            for i in range(5):
                plants.append(Plant(name=random.choice(name), price=fake.pricetag(), water=random.choice(water), sun=random.choice(sunlight), qty=random.randint(0,4), 
                            image1=random.choice(images), image2=random.choice(images), image3=random.choice(images)))
            db.session.add_all(plants)
            db.session.commit()
        print("Adding seed data...")
        create_plant_data()
                
            
        
        
