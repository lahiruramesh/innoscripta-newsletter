sail-up:
	cd web-api && ./vendor/bin/sail up

sail-down:
	cd web-api && ./vendor/bin/sail down

sail-logs:
	cd web-api && ./vendor/bin/sail logs -f

sail-genereate-doc:
	cd web-api && ./vendor/bin/sail artisan scribe:generate

sail-unit-test:
	cd web-api && ./vendor/bin/sail aritsan test

# sail-alias:
# 	cd web-api && alias sail='bash vendor/bin/sail'


