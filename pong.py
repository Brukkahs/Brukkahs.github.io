pygame.init()


width = 800
height = 600


screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Pong")


paddle_width= 10
paddle_height = 100
ball_size = 20
ball_speed = 7
speed = 7


ball = pygame.Rect(width // 2, height // 2, ball_size, ball_size)
ball_dx = ball_speed
ball_dy = ball_speed


left_paddle = pygame.Rect(10, height // 2 - paddle_height // 2, paddle_width, paddle_height)
right_paddle = pygame.Rect(width - 20, height // 2 - paddle_height // 2, paddle_width, paddle_height)


score_font = pygame.font.Font(None, 36)
win_font = pygame.font.Font(None, 72)
left_score = 0
right_score = 0


clock = pygame.time.Clock()
running = True
game_state = "running"
paused = False


while running:
   clock.tick(60)


   for event in pygame.event.get():
       if event.type == pygame.QUIT:
           running = False
       elif event.type == pygame.KEYDOWN:
           if event.key == pygame.K_SPACE:
               paused = not paused


   if game_state == "running" and not paused:
       keys = pygame.key.get_pressed()
       if keys[pygame.K_w] and left_paddle.top > 0:
           left_paddle.y -= speed
       if keys[pygame.K_s] and left_paddle.bottom < height:
           left_paddle.y += speed
       if keys[pygame.K_UP] and right_paddle.top > 0:
           right_paddle.y -= speed
       if keys[pygame.K_DOWN] and right_paddle.bottom < height:
           right_paddle.y += speed


       ball.x += ball_dx
       ball.y += ball_dy


       if ball.top <= 0 or ball.bottom >= height:
           ball_dy *= -1


       if ball.colliderect(left_paddle) or ball.colliderect(right_paddle):
           ball_dx *= -1
           ball_speed += 1


       if ball.left <= 0:
           right_score += 1
           ball.center = (width // 2, height // 2)
           ball_dx *= -1


       if ball.right >= width:
           left_score += 1
           ball.center = (width // 2, height // 2)
           ball_dx *= -1


       if left_score == 7 or right_score == 7:
           game_state = "over"
           winner = "Blue  Wins!" if left_score == 7 else "Red Wins!"
           winner_text = win_font.render(winner, True, (255, 255, 255))


   screen.fill((0, 0, 0))
   pygame.draw.rect(screen, (0, 0, 255), left_paddle)
   pygame.draw.rect(screen, (255, 0, 0), right_paddle)
   pygame.draw.ellipse(screen, (255, 255, 255), ball)


   left_text = score_font.render(str(left_score), True, (0, 0, 255))
   right_text = score_font.render(str(right_score), True, (255, 0, 0))
   screen.blit(left_text, (200, 20))
   screen.blit(right_text, (600, 20))


   if game_state == "over":
       screen.blit(winner_text, (width // 2 - winner_text.get_width() // 2, height // 2 - 50))
       pygame.display.update()
       pygame.time.delay(3000)
   else:
       pygame.display.update()


pygame.quit()

